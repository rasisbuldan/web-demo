// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req);

  let dataArr = [];
  for (let i = 1; i <= req.query.count; i++) {
    dataArr.push({
      id: i,
      title: (Math.random() + 1).toString(36).substring(7),
      price: 100000 * i
    })
  }
  res.status(200).json(dataArr)
}
