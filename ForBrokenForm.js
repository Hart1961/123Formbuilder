(function(){
window.addEventListener('load', function(){
	var sourceControlId = "text-00000010", /** ID OF THE SENDER CONTROL **/
	targetControlId = "text-00000012" /** ID OF THE RECEIVER CONTROL **/
	
	window.alert("I got called");

	sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);
	targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

	sourceControlInstance.on('value-change', function(){
		targetControlInstance.setValue( sourceControlInstance.getValue() );
	});

	targetControlInstance.setValue( sourceControlInstance.getValue() );
});
})();