export default function WorkPost({ post }) {
  return (
    <div className="work-post" id={post.title}>
      <h2 className="work-post-title">{post.title}</h2>
    </div>
  );
}
