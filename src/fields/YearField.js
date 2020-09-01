import { TextControl, SelectControl } from "@wordpress/components";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

const years = () => {
	let yearoptions = [{ value: null, label: "Escoge un año", disabled: true }];
	for (let i = 2000; i < 2031; i++) {
		yearoptions.push({ value: i, label: i });
	}
	//console.log(yearoptions);
	return yearoptions;
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

let YearField = (props) => {
	return (
		<>
			<SelectControl
				label={__("Año de publicación")}
				value={props.doc_year}
				name="_ctci_doc_year"
				options={years()}
				onChange={(value) => props.onMetaFieldChange(value)}
			/>
		</>
	);
};

export default compose(applyYearWithSelect, applyYearWithDispatch)(YearField);
