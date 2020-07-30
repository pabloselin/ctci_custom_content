import { SelectControl } from "@wordpress/components";
import { select, withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

const applyMonthWithSelect = withSelect((select, ownProps) => {
	return {
		doc_month: select("core/editor").getEditedPostAttribute("meta")[
			"_ctci_doc_month"
		],
	};
});

const applyMonthWithDispatch = withDispatch((dispatch, ownProps) => {
	return {
		onMetaFieldChange: (value) => {
			dispatch("core/editor").editPost({
				meta: { _ctci_doc_month: value },
			});
		},
	};
});

let MonthField = (props) => {
	return (
		<SelectControl
			label={__("Mes de publicación")}
			value={props.doc_month}
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
			onChange={(value) => props.onMetaFieldChange(value)}
		/>
	);
};

export default compose(
	applyMonthWithSelect,
	applyMonthWithDispatch
)(MonthField);
