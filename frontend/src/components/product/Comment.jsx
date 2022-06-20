export default function Comment({ comment }) {
  return (
    <div>
      <div className="md:h-20 md:w-20 md:p-4 h-14 w-14 p-2 absolute-left-7 md:-left-10-left-4 bg-white md:-top-4-top-3">
        <img
          src={comment.avatar}
          alt="/"
          className="md:h-12 md:w-12 w-10 h-10"
        />
      </div>
      <div className="md:ml-14 ml-10">
        <h6 className="font-medium text-lg">
          {comment.name}
          <span className="text-gray-400 ml-2 text-xs font-semibold">
            {comment.date}
          </span>
        </h6>
        <p className="tracking-wide leading-6 mt-1 mb-3 text-sm text-gray-600 font-sans">
          {comment.text}
        </p>
        <div className="flex items-center">
          <span className="inline-block">
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L6.5 1L12 7"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="mx-1 inline-block tex-sm font-bold">
            {comment.likes}
          </span>
          <span className="inline-block">
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6.5 7L12 1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="mx-5 inline-block font-medium text-base">Reply</span>
          <span className="inline-block font-medium text-base">Report</span>
        </div>
        <div className="border-l-2 border-gray-200 relative mt-6">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      </div>
    </div>
  );
}
