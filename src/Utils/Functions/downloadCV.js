export const onButtonClick = () => {
	// using Java Script method to get PDF file
	fetch('grigoryaaan.pdf').then(response => {
		response.blob().then(blob => {
			// Creating new object of PDF file
			const fileURL = window.URL.createObjectURL(blob);
			// Setting various property values
			let alink = document.createElement('a');
			alink.href = fileURL;
			alink.download = 'grigoryanCV.pdf';
			alink.click();
			console.log(fileURL)
		})
	})
}