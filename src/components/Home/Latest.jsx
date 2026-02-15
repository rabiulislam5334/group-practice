function LatestCard({ num }) {
  return (
    <div className="mx-auto flex items-center gap-2 p-4 border rounded shadow-sm">
      <h1 className="font-bold">Car Number</h1>
      <span>{num}</span>
    </div>
  );
}

function Latest() {
  return (
    <div className="max-w-7xl mx-auto border flex flex-wrap gap-4 p-4 mt-20">
      {[1, 2, 3, 4, 5].map((num, index) => (
        <LatestCard key={index} num={num} />
      ))}
    </div>
  );
}

export default Latest;
