import { FormFileUpload } from "@wordpress/components";
import handleUpload from "../utils/handleUpload.js";
import { __ } from "@wordpress/i18n";

export default (props) => {
	return (
		<FormFileUpload
			accept=".pdf"
			onChange={() =>
				handleUpload(event.target.files, "_ctci_doc_file_pdf_id")
			}
			icon="insert"
		>
			{__("Subir archivo PDF", "ctci")}
		</FormFileUpload>
	);
};
