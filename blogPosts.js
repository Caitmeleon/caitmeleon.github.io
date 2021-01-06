const posts = [
	{id: 20210106, title: 'January 6, 2020', content: 'I\'m experimenting today with a new language, ReactJS. Please pardon the mess on this page while I learn a bit about it.'},
  {id: 20210104, title: 'January 4, 2021', content: '<p> <u>SQL tidbit:</u> If you\'ve recently just returned from an extended vacation and find yourself struggling to remember your job is including what you usually do in a day, how you do it, etc.. I recommend remembering the <b>trunc</b> function. Just because the dates look the same when you select them doesn\'t mean they are the same. The <b>trunc</b> function allows you to compare two date fields without the timestamps. </p><p> <u>Manager tidbit:</u> GA\'s may ask questions concerning jobs and recruiters that you are not sure of the answer to. I encourage to always answer as thoroughly as honestly as able, but I also might encourage sending them to do some research on it first (while you quickly do some searches yourself). Today\'s question was how to appropriately reach out to a recruiter. The current recommended path is to write up a cover letter of sorts that lays out pertinent information such as degree (including classes and skills), the desired type of position, and a quick synopsis of what makes the candidate stand out from others. <p> '},
  {id: 20201218, title: 'December 18, 2020', content: 'This is just the beginning! I wanted a way to keep track of everything and this seemed like a fun way. I enjoy building web pages, so why not? I hope to improve this site over time as I learn and improve myself.'},
  
];

function Blog(props) {
const sidemenu = props.posts.map((post) =>
  <ul>
  <li><a href={post.id}>{post.title}</a></li>
  </ul>
);
const content = props.posts.map((post) =>                               
<div class='mainPost'>
	<div class='cardPost'id={post.id}>
      <h3 class='cardHeaderPost'> {post.title}</h3>
    <p dangerouslySetInnerHTML={{ __html:post.content}}/>
    </div>
</div>
  );
  return ( 
    <div>
      <div class='sideMenu'>{sidemenu}</div>
       <div>{content}</div>
      </div>
  );
}


ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('blogPosts')
);