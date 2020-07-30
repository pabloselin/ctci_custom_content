import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import {
	PanelBody,
	TextControl,
	FormFileUpload,
	SelectControl,
} from "@wordpress/components";
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

	//Mostrar el campo personalizado en la interfaz
};

let handleOption = (value, field) => {
	console.log(value, field);
};

let handleTextField = (value, field) => {
	console.log(value, field);
};

let assignFileField = (files) => {
	//Asignar el campo personalizado para el archivo
	console.log(files);
	//Procesar el markdown para pasarlo a texto plano
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
					{__("Subir archivo PDF", "ctci")}
				</FormFileUpload>

				<FormFileUpload
					accept=".md"
					onChange={() => handleUpload(event.target.files)}
					icon="insert"
				>
					{__("Subir archivo Markdown o TXT", "ctci")}
				</FormFileUpload>

				<TextControl
					label={__("Año de publicación")}
					value={props._ctci_doc_year}
					type="number"
					name="_ctci_doc_year"
					onChange={() =>
						handleTextField(event.target.value, event.target.name)
					}
				/>
				<SelectControl
					label={__("Mes de publicación")}
					value={props._ctci_doc_month}
					name="_ctci_doc_month"
					options={[
						{ value: null, label: "Escoge un mes", disabled: true },
						{ value: "01", label: "Enero" },
						{ value: "02", label: "Febrero" },
						{ value: "03", label: "Marzo" },
						{ value: "04", label: "Abril" },
						{ value: "05", label: "Mayo" },
						{ value: "06", label: "Junio" },
						{ value: "07", label: "Julio" },
						{ value: "08", label: "Agosto" },
						{ value: "09", label: "Septiembre" },
						{ value: "10", label: "Octubre" },
						{ value: "11", label: "Noviembre" },
						{ value: "12", label: "Diciembre" },
					]}
					onChange={() =>
						handleOption(event.target.value, event.target.name)
					}
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
