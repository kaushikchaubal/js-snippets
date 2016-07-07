// When?  To get a list of all your repos in bitbucket
// What to do? Login >> Go to the homepage (https://bitbucket.org/) >> Open Dev Tools & Run:

function printAllBitBucketRepos() {
  var bitBucketRepoList = [];
  
	$(".repo-list--repo-name").each(function() {
	bitBucketRepoList.push($(this).text());
}); 

  return bitBucketRepoList;          
}

console.log(bitBucketRepoList);

// When?  To get a list of all your repos in github
// What to do? Login >> Go to the homepage (For example: https://github.com/kaushikchaubal?tab=repositories) >> Open Dev Tools & Run:

function printAllGithubRepos() {
  var gitHubRepoList = [];
  var codeTags = document.querySelectorAll('a[itemprop="name codeRepository"]')
  for (i = 0; i < codeTags.length; i++) { 
  	gitHubRepoList.push((codeTags[i]).innerHTML.trim());
  }

  return gitHubRepoList;          
}

console.log(gitHubRepoList);
