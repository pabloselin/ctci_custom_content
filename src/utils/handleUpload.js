import { uploadMedia } from "@wordpress/media-utils";
import { select, withSelect, withDispatch } from "@wordpress/data";

let assignFileField = (files, fieldname) => {
	//Asignar el campo personalizado para el archivo
	//console.log(files, fieldname);
	if (files.id) {
		console.log(files);
		let fieldData = {};
		fieldData[fieldname] = files.id;
		wp.data.select("core/editor").getEditedPostAttribute("meta");
		wp.data.dispatch("core/editor").editPost({ meta: fieldData });
	}
};

export default (files, fieldname) => {
	//Subir el archivo //Mostrar indicador de progreso
	uploadMedia({
		filesList: files,
		onFileChange: ([fileObj]) => assignFileField(fileObj, fieldname),
		onError: console.error,
	});
};
