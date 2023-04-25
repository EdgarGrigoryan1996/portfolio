export const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('edgar.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'edgar.pdf';
            alink.click();
        })
    })
}