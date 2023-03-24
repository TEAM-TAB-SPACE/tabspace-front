import variables from '../../../styles/variables.module.scss';

function AlarmPopoverContent({ content = [] }: { content: string[] }) {
  if (!content.length) {
    return <p>알림이 없습니다.</p>;
  }

  return (
    <>
      <div>
        {content?.map((item: string, index: number) => {
          return (
            <p key={index} className="dashboard__alarmItem">
              {item}
            </p>
          );
        })}
      </div>
      <style jsx global>{`
        .dashboard__alarmItem {
          width: 200px;
          line-height: 130%;
          padding: 10px 0;
          border-bottom: 1px solid ${variables.borderColor};

          &:first-child {
            padding-top: 0;
          }

          &:last-child {
            padding-bottom: 0;
            border-bottom: none;
          }
        }
      `}</style>
    </>
  );
}

export default AlarmPopoverContent;
