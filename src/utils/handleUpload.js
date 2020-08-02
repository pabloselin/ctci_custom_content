import { uploadMedia } from "@wordpress/media-utils";
import { select, withSelect, withDispatch } from "@wordpress/data";

const handleFileRead = (e) => {
	const content = fileReader.result;
	console.log(content);
};

const assignFileField = (files, fieldname) => {
	if (files && files.id) {
		console.log(files);
		let fieldData = {};
		fieldData[fieldname] = files.slug;
		wp.data.select("core/editor").getEditedPostAttribute("meta");
		wp.data.dispatch("core/editor").editPost({ meta: fieldData });
		wp.data
			.dispatch("core/notices")
			.createNotice("success", "Documento subido", {
				isDismissable: true,
			});
	}
};

const displayError = (error) => {
	console.error;
	wp.data
		.dispatch("core/notices")
		.createNotice("error", "Hubo un problema al subir el archivo", {
			isDismissable: true,
		});
};

export default (files, fieldname) => {
	//Subir el archivo //Mostrar indicador de progreso
	uploadMedia({
		filesList: files,
		onFileChange: ([fileObj]) => assignFileField(fileObj, fieldname),
		onError: (error) => displayError(error),
	});
};
