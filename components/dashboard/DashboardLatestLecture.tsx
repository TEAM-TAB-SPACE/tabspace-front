import Link from 'next/link';

function DashboardLatestLecture() {
  return (
    <>
      <div className="dashboard__latestLecture">
        <Link href="/lecture" className="latestLecture__img"></Link>
      </div>
      <style jsx global>{`
        .dashboard__latestLecture {
          position: relative;
          padding-bottom: 56.25%;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .latestLecture__img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('http://img.youtube.com/vi/G360D6lqrfo/0.jpg')
            no-repeat;
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </>
  );
}

export default DashboardLatestLecture;
