import Link from 'next/link';

import { ALARM_NO_DATA_MESSAGE } from 'constants/messages';
import { INTERNAL } from 'constants/urls';

import variables from 'styles/variables.module.scss';

const LECTURE_EVALUATION = '강의평가';

function AlarmPopoverContent({ content = [] }: { content?: string[] }) {
  if (!content || !content.length) {
    return <p>{ALARM_NO_DATA_MESSAGE}</p>;
  }

  return (
    <>
      <div>
        {content?.map((item: string, index: number) => {
          const splitItem = item.split(LECTURE_EVALUATION);

          return (
            <p key={index} className="dashboard__alarmItem">
              {splitItem[0]}
              {splitItem.length > 1 && (
                <Link href={INTERNAL.evaluation} style={{ color: '#1677ff' }}>
                  {LECTURE_EVALUATION}
                </Link>
              )}
              {splitItem[1]}
            </p>
          );
        })}
      </div>
      <style jsx global>{`
        .dashboard__alarmItem {
          display: block;
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
