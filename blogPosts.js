const posts = [
	{id: 20210119, title: 'January 19, 2021', managerTidbit: 'Sometimes it may take a bit of effort to explain something to an individual that\'s brand new to something, but it is always worth it when the lightbulb clicks! It\'s also important as a manager that you are aware of how your supervisees are feeling about their new assignments. I hadn\'t realized that one of my student workers was struggling with a script and when we talked about it I learned that it was bothering them that they were stuck and weren\'t progressing as quickly as they would like.', sqlTidbit: '', otherTidbit:'' },
	{id: 20210112, title: 'January 12, 2021', managerTidbit: '', sqlTidbit: '', badTidbit: '<p><u>PL/SQL Tidbit:</u> If you have a package and you\'re attempting to call a function that returns a record, this might help you out.<br> Say you have the following elements:<ul><li>A package called <b>myPack</b></li><li>A record called <b>myRec</b></li><li>A cursor return variable <b>myRef</b>, which is of type myRec</li><li>A function called <b>myFunc</b>. This function takes in several parameters (p1, p2, p3) and returns myRef</li></ul>In the sql file that you want to call this function you can define another variable that is of the record type.<br> Ex: currentRec := myPack.myRec;<br>Then you can call the function and set that equal to your record type variable.<br> currentRec := myPack.myFunc(<br>&emsp;p1=>\'parm1\',<br>&emsp;p2=>\'parm2\'<br>&emsp;p3=>\'parm3\');<br><br>Then you can loop through and use whatever values you need in it! </p>', otherTidbit: ''},
	{id: 20210106, title: 'January 6, 2021', managerTidbit: '', sqlTidbit: '', otherTidbit: 'I\'m experimenting today with a new language, ReactJS. Please pardon the mess on this page while I learn a bit about it.'},
  {id: 20210104, title: 'January 4, 2021', managerTidbit: 'GA\'s may ask questions concerning jobs and recruiters that you are not sure of the answer to. I encourage to always answer as thoroughly as honestly as able, but I also might encourage sending them to do some research on it first (while you quickly do some searches yourself). Today\'s question was how to appropriately reach out to a recruiter. The current recommended path is to write up a cover letter of sorts that lays out pertinent information such as degree (including classes and skills), the desired type of position, and a quick synopsis of what makes the candidate stand out from others.', sqlTidbit: 'If you\'ve recently just returned from an extended vacation and find yourself struggling to remember your job is including what you usually do in a day, how you do it, etc.. I recommend remembering the trunc function. Just because the dates look the same when you select them doesn\'t mean they are the same. The trunc function allows you to compare two date fields without the timestamps.', otherTidbit: ''},
  {id: 20201218, title: 'December 18, 2020', managerTidbit: '', sqlTidbit: '', otherTidbit: 'This is just the beginning! I wanted a way to keep track of everything and this seemed like a fun way. I enjoy building web pages, so why not? I hope to improve this site over time as I learn and improve myself.'}
  
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
		{post.managerTidbit != '' &&
        <div> <u>Manager Tidbit: </u>
        {post.managerTidbit}
        </div>
      } 
    		{post.sqlTidbit != '' &&
      <div><u>PL/SQL Tidbit: </u>
        {post.sqlTidbit}
        </div>
      } 
    {post.otherTidbit != '' &&
      <div><u>Other Tidbit: </u>
        {post.otherTidbit}
        </div>
      } 
    {post.badTidbit != '' &&
      <p dangerouslySetInnerHTML= {{__html:post.badTidbit}}/>
    }
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