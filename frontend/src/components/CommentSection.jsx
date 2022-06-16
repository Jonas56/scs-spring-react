import React from "react";
import Comment from "./Comment";
import FormReply from "./FormReply";

const comments = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://avatars.dicebear.com/api/personas/jonas5.svg",
    date: "Today at 4:20pm",
    rating: 5,
    text: "This is a great product! Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum",
    likes: 4,
    replies: [],
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: "https://avatars.dicebear.com/api/personas/jonas56.svg",
    date: "Today at 4:20pm",
    rating: 4,
    text: "This is a great product!",
    likes: 4,

    replies: [
      {
        id: 1,
        name: "John Doe",
        avatar: "https://avatars.dicebear.com/api/personas/jonas51.svg",
        date: "Today at 4:20pm",
        rating: 5,
        text: "This is a great product!",
        replies: [],
        likes: 6,
      },
    ],
  },
];

function CommentSection() {
  return (
    <section className="lg:w-3/5 md:w-3/4 w-11/12 h-[90%] bg-white rounded-lg px-8 py-6 md:px-12 md:py-8">
      <div className="border-l-2 border-gray-200 relative mb-10">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <FormReply />
      </div>
    </section>
  );
}

export default CommentSection;
