const collapsing = (nameClass) => () => {
  $header = $(nameClass);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(500, function () {
      //execute this after slideToggle is done
      //change text of header based on visibility of content div
  });
}

$(".aboutTitle").click(collapsing(".aboutTitle"));

$(".startingGit").click(collapsing(".startingGit"));

$(".startingProject").click(collapsing(".startingProject"));

$(".creatingBranches").click(collapsing(".creatingBranches"));

$(".wrong-code").click(collapsing(".wrong-code"));
