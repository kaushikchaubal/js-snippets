// When?  To get a list of all your repos in bitbucket

// What to do? Login >> Go to the homepage (https://bitbucket.org/) >> Open Dev Tools & Run:

function printAllRepos() {
  var repoList = [];

	$(".repo-list--repo-name").each(function() {
    repoList.push($(this).text());
	}); 

  return repoList;          
}

console.log(repoList);
