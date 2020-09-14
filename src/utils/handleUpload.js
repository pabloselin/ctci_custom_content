import { uploadMedia } from "@wordpress/media-utils";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { getBlobByURL } from "@wordpress/blob";

let fileReader;
let url;

const handleFileRead = (e) => {
	const content = fileReader.result;
	let textContent = {};
	textContent["_ctci_doc_text_contents"] = content;
	wp.data.dispatch("core/editor").editPost({ meta: textContent });
	wp.data
		.dispatch("core/notices")
		.createNotice("success", "Contenido textual procesado", {
			isDismissable: true,
		});
};

const assignFileField = (files, fieldname) => {
	if (
		fieldname === "_ctci_doc_file_md_slug" &&
		files.url.startsWith("blob")
	) {
		url = getBlobByURL(files.url);
		fileReader = new FileReader();
		fileReader.onloadend = handleFileRead;
		fileReader.readAsText(url);
	}
	if (files && files.id) {
		let fieldData = {};
		fieldData[fieldname] = files.slug;
		wp.data.select("core/editor").getEditedPostAttribute("meta");
		console.log(fieldData);
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
