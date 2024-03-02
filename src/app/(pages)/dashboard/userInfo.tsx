export default async function UserInfo({ doc }) {
  return (
    <div className="card bg-base-300 shadow-lg">
      <div className="card-body">
        <div className="flex justify-between">
          <p>{doc.noHp}</p>
          <p>216300</p>
        </div>

        <p>Saldo rekening</p>
        <p className="font-semibold text-2xl">
          Rp {doc.balance.toLocaleString("id-ID")}
        </p>

        <div className="grid grid-cols-2 text-xs md:text-base">
          <div>
            <p>Penghasilan hari ini</p>
            <p>Rp {doc.todayIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Penghasilan kemarin</p>
            <p>Rp {doc.yesterdayIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Penghasilan Kumulatif</p>
            <p>Rp {doc.cumulativeIncome.toLocaleString("id-ID")}</p>
          </div>

          <div>
            <p>Manfaat tim</p>
            <p>Rp {doc.teamBenefit.toLocaleString("id-ID")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}