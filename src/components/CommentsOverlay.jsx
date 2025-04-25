import React, { useState, useEffect, useRef } from "react";

const initialComments = [
  {
    id: 1,
    author: "User123",
    text: "This is pure 🔥!",
    replies: [
      {
        id: 2,
        author: "NatureFan",
        text: "Absolutely feeling the vibe! 🌟",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    author: "CreativeSoul",
    text: "The energy here is amazing ⚡",
    replies: [
      {
        id: 4,
        author: "ArtLover",
        text: "Totally agree! The aura is incredible ✨",
        replies: [],
      },
    ],
  },
];

export default function CommentsOverlay({ isOpen, onClose }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const replyInputRef = useRef(null);

  const addComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "User",
        text: newComment,
        replies: [],
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  useEffect(() => {
    if (replyTo !== null && replyInputRef.current) {
      replyInputRef.current.focus();
    }
  }, [replyTo]);

  const addReply = (parentId, e) => {
    e.preventDefault();
    if (replyText.trim()) {
      const reply = {
        id: Date.now(),
        author: "CurrentUser",
        text: replyText,
        replies: [],
      };

      const updateComments = (commentsArr) => {
        return commentsArr.map((comment) => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, reply] };
          } else if (comment.replies && comment.replies.length > 0) {
            return {
              ...comment,
              replies: updateComments(comment.replies),
            };
          }
          return comment;
        });
      };

      setComments(updateComments(comments));
      setReplyText("");
      setReplyTo(null);
    }
  };

  // Moved Comment to a separate component outside the rendering to prevent re-renders
  const renderComment = (comment, depth = 0) => {
    return (
      <div
        key={comment.id}
        className={`comment py-8 ${depth > 0 ? "ml-24" : ""}`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-row align-center gap-8">
            <span className="font-bold">{comment.author}</span>
            <span className="text-sm opacity-75">1h ago</span>
          </div>
          <p>{comment.text}</p>
          <button
            className="reply-btn text-muted text-small self-start"
            onClick={() => setReplyTo(comment.id)}
          >
            Reply
          </button>

          {replyTo === comment.id && (
            <form
              onSubmit={(e) => addReply(comment.id, e)}
              className="mt-8 flex gap-8"
            >
              <input
                ref={replyInputRef}
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 p-8 rounded bg-dark-gray"
              />
              <button type="submit" className="comment-post-btn-small">
                Post
              </button>
              <button
                type="button"
                className="cancel-post-btn"
                onClick={() => setReplyTo(null)}
              >
                Cancel
              </button>
            </form>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="replies">
              {comment.replies.map((reply) => renderComment(reply, depth + 1))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`comment-overlay ${isOpen ? "comment-overlay-active" : ""}`}
    >
      <div className="comment-content flex flex-col p-16">
        <div className="comment-header">
          <div className="flex flex-row align-center justify-between p-16">
            <h2>Comments</h2>
            <img
              className="width-18 svg-white"
              src="./cross.svg"
              onClick={onClose}
              alt="Close"
            />
          </div>
          <hr />
        </div>

        <div className="overlay-comments p-16">
          {comments.map((comment) => renderComment(comment))}
        </div>

        <form onSubmit={addComment} className="mt-auto p-16 flex gap-8">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-8 rounded"
          />
          <button type="submit" className="comment-post-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
