import { SelectControl, TextControl } from "@wordpress/components";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

const days = () => {
	let dayOptions = [
		{ value: null, label: "Escoge un día", disabled: true },
		{ value: "", label: "Ninguno" },
	];
	for (let i = 1; i < 32; i++) {
		dayOptions.push({ value: i, label: i });
	}

	return dayOptions;
};

let DayField = (props) => {
	return (
		<>
			<SelectControl
				label={__("Día de publicación")}
				value={props.doc_day}
				type="number"
				name="_ctci_doc_day"
				options={days()}
				onChange={(value) => {
					props.onMetaFieldChange(value);
				}}
			/>
		</>
	);
};

const applyDayWithSelect = withSelect((select, ownProps) => {
	return {
		doc_day: select("core/editor").getEditedPostAttribute("meta")[
			"_ctci_doc_day"
		],
	};
});

const applyDayWithDispatch = withDispatch((dispatch, ownProps) => {
	return {
		onMetaFieldChange: (value) => {
			dispatch("core/editor").editPost({
				meta: { _ctci_doc_day: value },
			});
		},
	};
});

export default compose(applyDayWithSelect, applyDayWithDispatch)(DayField);
