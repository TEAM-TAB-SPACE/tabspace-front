import { Button } from 'antd';

interface IndicatorPopoverProps {
  onItemClick: (type: 'edit' | 'delete') => () => void;
  className: string;
}

function IndicatorPopover({ onItemClick, className }: IndicatorPopoverProps) {
  return (
    <div className={`${className} indicator__popover`}>
      <Button
        type="text"
        className="popover__item"
        size="small"
        style={{ width: '100%' }}
        onClick={onItemClick('edit')}
      >
        수정하기
      </Button>
      <Button
        type="text"
        className="popover__item"
        size="small"
        style={{ width: '100%' }}
        onClick={onItemClick('delete')}
      >
        삭제하기
      </Button>
    </div>
  );
}

export default IndicatorPopover;
