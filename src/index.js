import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { PanelBody, TextControl, FormFileUpload } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { uploadMedia } from "@wordpress/media-utils";

let handleUpload = (files) => {
	//Subir el archivo //Mostrar indicador de progreso
	uploadMedia({
		filesList: files,
		onFileChange: () => assignFileField(files),
		onError: console.error,
	});

	//Asignar el campo personalizado para el archivo

	//Mostrar el campo personalizado en la interfaz

	//Procesar el markdown para pasarlo a texto plano
};

let assignFileField = (files) => {
	console.log(files);
};

let DocMetaFields = (props) => {
	return (
		<>
			<PanelBody
				title={__("Archivo", "ctci")}
				icon="media-document"
				initialOpen={true}
			>
				<FormFileUpload
					accept=".pdf"
					onChange={() => handleUpload(event.target.files)}
					icon="insert"
				>
					{__("Subir archivo", "ctci")}
				</FormFileUpload>
				<TextControl
					value={props.text_metafield}
					label={__("Documento", "ctci")}
				/>
			</PanelBody>
		</>
	);
};

DocMetaFields = withSelect((select) => {
	return {
		text_metafield: select("core/editor").getEditedPostAttribute("meta")[
			"_ctci_doc_file_info"
		],
	};
})(DocMetaFields);

registerPlugin("ctci-sidebar", {
	icon: "media-document",
	render: () => {
		const postType = select("core/editor").getCurrentPostType();

		if (postType === "ctci_doc") {
			return (
				<>
					<PluginSidebarMoreMenuItem target="ctci_docs_sidebar">
						{__("Información documento", "ctci")}
					</PluginSidebarMoreMenuItem>
					<PluginSidebar
						name="ctci_docs_sidebar"
						title={__("Información del Documento", "ctci")}
					>
						<DocMetaFields />
					</PluginSidebar>
				</>
			);
		} else {
			return null;
		}
	},
});
