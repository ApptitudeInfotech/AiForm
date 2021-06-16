import React from "react";
import PropTypes from 'prop-types';


/**
 * Minimal Form Radio React Component.
 * 
 * @author [Apptitude Infotech](https://github.com/ApptitudeInfotech)
 */
const AiRadio = (props) => {
    const { inline = true, showLabel = true, withGroup = true, options = [], selectedValue, style = {}, ...rest } = props;

    let label = props.label || props.name;

    let inpStyle = {
        fontFamily: `inherit`,
        fontSize: `inherit`,
        lineHeight: `inherit`,
        margin: 0,
        fontWeight: 400,
        display: `block`,
        width: `100%`,
        padding: `5px 10px`,
        boxSizing: `border-box`,
        border: `1.5px solid #ccc`,
        WebkitTransition: `0.5s`,
        transition: `0.5s`,
        outline: `none`,
        backgroundColor: `transparent`,
    };



    return (
        <div style={{ marginBottom: withGroup ? '.85rem' : 0, fontFamily: `inherit`, fontSize: `0.95rem` }}>
            {
                showLabel
                    ?
                    <label
                        style={{
                            display: `block`,
                            padding: `0.2rem 0`,
                            fontWeight: 500,
                            textTransform: `capitalize`
                        }}
                    >
                        {label}
                    </label>
                    :
                    null
            }

            <div style={{ display: `flex`, flexFlow: `${inline ? 'row' : 'column'} wrap` }}>
                {options.map((opt, i) => {
                    let ariaLabelledby = `radio_id_${props.name}_${i}_${opt.value}`;
                    return (
                        <div key={ariaLabelledby}
                            style={{ margin: 4, display: `inline-flex`, flexFlow: `row wrap`, alignItems: `center` }}
                        >
                            <input
                                id={ariaLabelledby}
                                value={opt.value}
                                type="radio"
                                defaultChecked={String(selectedValue) === String(opt.value)}
                                style={{
                                    ...inpStyle,
                                    width: `1.5rem`,
                                    height: `1.5rem`,
                                    position: `relative`,
                                    ...style
                                }}
                                {...rest}
                            />
                            <label style={{
                                marginLeft: `0.25rem`,
                                marginRight: `0.75rem`,
                                textTransform: `capitalize`,
                            }} htmlFor={ariaLabelledby}>{opt.label}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

AiRadio.propTypes = {
    /**
    * Inline display
    */
    inline: PropTypes.bool,
    /**
   * Select field Name
   */
    name: PropTypes.string.isRequired,
    /**
     * Select field label
     */
    label: PropTypes.string,
    /**
    * Show label
    */
    showLabel: PropTypes.bool,
    /**
    * With Group Fieldset
    */
    withGroup: PropTypes.bool,
    /**
   * Select Options
   */
    options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.any, value: PropTypes.any })),
    /**
    * Default Checked Options 
    */
    selectedValue: PropTypes.any,
};


AiRadio.defaultProps = {
    inline: true,
    name: 'radiofield1',
    showLabel: true,
    withGroup: true,
};

export default AiRadio;
