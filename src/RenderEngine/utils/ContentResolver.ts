const ContentResolver =  (content: string) => {
	if(content)
		import(`../../pages/${content}/Content.json`).then(data => {
			console.log(data.default);
		});
}

export default ContentResolver;