		// function detectAliases(index: number, searchTerm: string) {
		// 	const possibleAliases = allSearchTerms.filter(
		// 		(term) => term !== searchTerm,
		// 	);

		// 	console.log("possibleAliases:", possibleAliases);

		// 	let beforeCheck = text.slice(
		// 		index - (longestSearchTermLength - 1),
		// 		index + 1,
		// 	);
		// 	let afterCheck = text.slice(index, index + longestSearchTermLength);

		// 	for (let alias of possibleAliases) {
		// 		if (beforeCheck.includes(alias) || afterCheck.includes(alias)) {
		// 			console.log(`Alias for ${searchTerm} detected`);
		// 			console.log("beforeCheck:", beforeCheck);
		// 			console.log("afterCheck:", afterCheck);
		// 			return true;
		// 		}
		// 	}
		// 	return false;
		// }
		
		function getLengthOfLongestSearchTerm() {
			let longest = 0;
			for (let term of allSearchTerms) {
				if (term.length > longest) {
					longest = term.length;
				}
			}
			return longest;
		}
		
		const listTermIndices = getTermIndices(text, "\n");
		let itemTagIndices = getTermIndices(text, "<li>");
		runningDisplacement = 0;
		
		for (let listIndex of listTermIndices) {
			for (let itemIndex of itemTagIndices) {
				if (listIndex === itemIndex - 1) {
					replacement = "<ul>";
					// console.log(
					// 	"itemTagIndices[-1]:",
					// 	itemTagIndices[itemTagIndices.length - 1],
					// );
				} else if (listIndex > itemTagIndices[-1]) {
					replacement = "</ul>";
				} else {
					replacement = "";
				}
				
				performReplacement(
					replacement,
					listIndex + runningDisplacement,
					listIndex + runningDisplacement,
				);
				
				runningDisplacement += replacement.length;
			}