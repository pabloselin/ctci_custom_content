import { TextControl } from "@wordpress/components";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

let YearField = (props) => {
	return (
		<>
			<TextControl
				label={__("Año de publicación")}
				value={props.doc_year}
				type="number"
				name="_ctci_doc_year"
				onChange={(value) => {
					props.onMetaFieldChange(value);
				}}
			/>
		</>
	);
};

const applyYearWithSelect = withSelect((select, ownProps) => {
	return {
		doc_year: select("core/editor").getEditedPostAttribute("meta")[
			"_ctci_doc_year"
		],
	};
});

const applyYearWithDispatch = withDispatch((dispatch, ownProps) => {
	return {
		onMetaFieldChange: (value) => {
			dispatch("core/editor").editPost({
				meta: { _ctci_doc_year: value },
			});
		},
	};
});

export default compose(applyYearWithSelect, applyYearWithDispatch)(YearField);
