interface ReplyButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ReplyButton({ onClick }: ReplyButtonProps) {
  return (
    <>
      <button className="comment__reply" type="button" onClick={onClick}>
        답글달기
      </button>
      <style jsx>{`
        .comment__reply {
          display: block;
          padding-left: 25px;
          border: none;
          background-color: transparent;
          font-size: 12px;
          font-weight: 500;
          color: #767676;
        }
      `}</style>
    </>
  );
}

export default ReplyButton;
