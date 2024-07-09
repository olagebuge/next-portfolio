import Link from "next/link"

const NotFound = () => {
  return (
    <div className="container">
      <span className="text-orange">NOT-FOUND</span><h2 className="h2Title">找不到這個頁面</h2>      
      <p className="my-40">你想找的頁面不存在…</p>
      <Link href="/" className="normalButton-line">← 返回首頁</Link>
    </div>
  )
}

export default NotFound