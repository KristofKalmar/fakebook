import posts from './posts.json';
import users from './users.json';
import comments from './comments.json';
import reactions from './reactions.json';
import friends from './friend.json';
import User from '../app/classes/User';
import Post from '../app/classes/Post';
import Reaction from '../app/classes/Reaction';
import Comment from '../app/classes/Comment';

const currentUserId = 0;

function getCurrentUser() {
  return currentUserId;
}

function getUserPosts(id: string) {
  let filteredPosts = posts.filter((post) => post.userId === id);
  let returnArray: any[] = [];

  filteredPosts.forEach(post => {
    const comments_local = comments.filter((comment) => comment.postId === post.id).map(comment => {
      const commentType = new Comment();

      commentType.userId = comment.userId;
      commentType.commentId = comment.postId;
      commentType.text = comment.body;

      return commentType;
    });

    const reactions_local = reactions.filter((reaction) => reaction.postId === post.id).map(reaction => {
      const reactionType = new Reaction();

      reactionType.isLike = reaction.isLike;
      reactionType.userId = reaction.userId;
      reactionType.postId = reaction.postId;

      return reactionType;
    });

    const user = users.filter((user) => user.id === id)[0];
    const userType = new User();

    userType.id = user.id;
    userType.bannerImage = user.bannerImage;
    userType.image = user.image;
    userType.fullName = user.fullName;
    userType.password = user.password;

    const postType = new Post();

    postType.id = post.id;
    postType.userId = post.userId;
    postType.date = new Date(Date.parse(post.date));
    postType.body = post.body;
    postType.attachment = post.attachment;

    let returnItem = {
      post: postType,
      comments: comments_local,
      reactions: reactions_local,
      user: userType,
    };

    returnArray.push(returnItem);
  })

  return returnArray;
}

function getFriendsForUser(id: string) {
  return friends.filter((friend) => friend.userId === id);
}

function getTopTenPosts() {
  let sortedPosts = posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? -1 : 1; });
  let returnArray = [];

  for (let i = 0; i < 10; i++) {
    const post = sortedPosts[i];
    const user = users.filter((user) => user.id === post.userId)[0];
    const comments_local = comments.filter((comment) => comment.postId === post.id).map(comment => {
      const commentType = new Comment();

      commentType.userId = comment.userId;
      commentType.commentId = comment.postId;
      commentType.text = comment.body;

      return commentType;
    });
    const reactions_local = reactions.filter((reaction) => reaction.postId === post.id).map(reaction => {
      const reactionType = new Reaction();

      reactionType.isLike = reaction.isLike;
      reactionType.userId = reaction.userId;
      reactionType.postId = reaction.postId;

      return reactionType;
    });

    const userType = new User();
    const postType = new Post();

    postType.id = post.id;
    postType.userId = post.userId;
    postType.date = new Date(Date.parse(post.date));
    postType.body = post.body;
    postType.attachment = post.attachment;

    userType.id = user.id;
    userType.bannerImage = user.bannerImage;
    userType.image = user.image;
    userType.fullName = user.fullName;
    userType.password = user.password;

    let returnItem = {
      post: postType,
      comments: comments_local,
      reactions: reactions_local,
      user: userType,
    };

    returnArray.push(returnItem);
  }

  return returnArray;
}

function getUser(id: string) {
  const user = users.find((user) => user.id === id)!;
  const userType = new User();

  userType.id = user.id;
  userType.bannerImage = user.bannerImage;
  userType.image = user.image;
  userType.fullName = user.fullName;
  userType.password = user.password;

  return userType;
}

function isFriends(user: User, otherUser: User) {

}

const exports = {
  getCurrentUser,
  getUserPosts,
  getUser,
  getFriendsForUser,
  getTopTenPosts,
  isFriends,
}

export default exports;
