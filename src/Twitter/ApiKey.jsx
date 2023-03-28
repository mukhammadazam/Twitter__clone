
const ApiKey = (props) => {
  const {title,data,img,summary}=props
  return (
    <div className="card">
<img src={img} alt="j2hr" />
<p>{data}</p>
<h1>{title}</h1>
<p>{summary}</p>
    </div>
  )
}

export default ApiKey