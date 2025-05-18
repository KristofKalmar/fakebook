import User from "../app/classes/User";
import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {
  addDoc,
  collection, deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs, limit, orderBy,
  query,
  setDoc,
  updateDoc,
  where
} from '@angular/fire/firestore';
import {deleteObject, getDownloadURL, getStorage, ref, uploadBytes} from '@angular/fire/storage';
import Post from '../app/classes/Post';
import Reaction from '../app/classes/Reaction';

@Injectable({
  providedIn: 'root'
})
export class Service {
  constructor(private auth: Auth, private router: Router, private firestore: Firestore) {}

  register(user: User) {
    return new Promise<any>((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, user.email, user.password).then(createdUser => {
        if (createdUser) {
          setDoc(doc(this.firestore, "users", createdUser.user.uid), {
            email: user.email,
            fullName: user.fullName,
            image: '',
          }).then(doc => {
            resolve(createdUser);
            this.router.navigate(["/profile"]);
          })
        } else {
          reject();
        }
      });
    })
  }

  updateProfileImage(banner: boolean, file: File) {
    return new Promise((resolve, reject) => {
      const extension = file.name.substring(file.name.lastIndexOf('.'));
      const path = `profile/${this.auth.currentUser!.uid}${banner ? "banner" : "image"}${extension}`;
      const firebaseStorage = getStorage();
      const fileRef = ref(firebaseStorage, path);

      try {
        uploadBytes(fileRef, file).then(_ => {
          getDownloadURL(fileRef).then(url => {
            if (banner) {
              updateDoc(doc(this.firestore, "users", this.auth.currentUser!.uid), {
                banner: url,
              }).then(doc => {
                resolve(url);
              })
            } else {
              updateDoc(doc(this.firestore, "users", this.auth.currentUser!.uid), {
                image: url,
              }).then(doc => {
                resolve(url);
              })
            }
          })
        })

      } catch (error) {
      }
    });
  }

  login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password).then(createdUser => {
        if (createdUser) {
          this.router.navigate(["/profile"]);
          resolve(true);
        } else {
          reject();
        }
      });
    })
  }

  logout() {
    signOut(this.auth);
  }

  post(post: Post, file: File | null) {
    return new Promise((resolve, reject) => {
      addDoc(collection(this.firestore, "posts"), {
        body: post.body,
        date: post.date,
        userId: this.auth.currentUser!.uid,
      }).then(postDoc => {
        setDoc(doc(this.firestore, "postRefs", postDoc.id), {
          post: postDoc.id,
          userId: this.auth.currentUser!.uid,
        }).then(postRefDoc => {
          if (file != null) {
            const extension = file.name.substring(file.name.lastIndexOf('.'));
            const path = `posts/${postDoc.id}${extension}`;
            const firebaseStorage = getStorage();
            const fileRef = ref(firebaseStorage, path);

            try {
              uploadBytes(fileRef, file).then(_ => {
                getDownloadURL(fileRef).then(url => {
                  updateDoc(doc(this.firestore, "posts", postDoc.id), {
                    attachment: url,
                  }).then(doc => {
                    resolve(url);
                  })
                })
              })

            } catch (error) {
            }
          } else {
            resolve(true);
          }
        })
      })
    })
  }

  getAllPosts() {
    return new Promise<string[]>((resolve, reject) => {
      const refsQuery = query(
        collection(this.firestore, 'postRefs'),
        orderBy('date', 'desc'),
        limit(10)
      );
      getDocs(refsQuery).then(docs => {
        const posts: string[] = [];

        docs.forEach((doc) => {
          posts.push(doc.data()!["post"])
        })

        resolve(posts);
      });
    })
  }

  fetchUserPosts() {
    return new Promise<string[]>((resolve, reject) => {
      const refsQuery = query(
        collection(this.firestore, 'postRefs'),
        orderBy('date', 'desc'),
        where('userId', '==', this.auth.currentUser!.uid),
      );

      getDocs(refsQuery).then(refSnapshots => {
        const postIds = refSnapshots.docs.map(doc => doc.data()['post']);

        resolve(postIds);
      })
    })
  }

  deletePost(postId: string, image: string) {
    return new Promise((resolve, reject) => {
      deleteDoc(doc(this.firestore, "posts", postId)).then(() => {
        deleteDoc(doc(this.firestore, "postRefs", postId)).then(() => {
          const firebaseStorage = getStorage();
          deleteObject(ref(firebaseStorage, image)).then(() => {
            resolve(true);
          })
        })
      })
    })
  }

  getPost(postId: string) {
    return new Promise<{ post: Post, reactions: Reaction[], user: User }>((resolve, reject) => {
      getDoc(doc(this.firestore, "posts", postId)).then(postSnapshot => {
        const post = new Post();
        const postData = postSnapshot.data();

        getDoc(doc(this.firestore, "users", postData!["userId"])).then(userSnapshot => {
          const user = new User();
          const userData = userSnapshot.data();

          user.id = userSnapshot.id;
          user.email = userData!["email"];
          user.fullName = userData!["fullName"];
          user.image = userData!["image"];

          post.id = postSnapshot.id;
          post.userId = postData!["userId"];
          post.attachment = postData!["attachment"];
          post.date = postData!["date"];
          post.body = postData!["body"];

          resolve({ post, reactions: [], user })
        })
      })
    })
  }

  fetchCurrentUser() {
    const id = this.auth.currentUser!.uid;
    return this.fetchUserProfile(id);
  }

  fetchUserProfile(id: string) {
    return new Promise<User>((resolve, reject) => {
      getDoc(doc(this.firestore, "users", id)).then(doc => {
        const user: User = new User();
        const data = doc.data()!;

        user.id = id;
        user.fullName = data["fullName"];
        user.email = data["email"];
        user.image = data["image"];
        user.bannerImage = data["banner"];

        resolve(user);
      })
    })
  }
}
