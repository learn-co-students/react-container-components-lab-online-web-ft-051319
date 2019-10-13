import React from 'react';

export default(props) => {
    var { attr, fieldAttribute } = props;
    var label = attr.label;
    var val = fieldAttribute.value;
    var keys = [];

    if( typeof val === 'object' ){
        keys = Object.keys( val );
    }

    return (
        <div className="form-group">
            <label className="col-sm-2 control-label">{label}</label>
            <div className="col-sm-10">
                {(() => {
                    if( typeof val === 'object' ){
                        keys.map(function(k){
                            return (
                                <p className="form-control-static"><span className="label label-default label-fixed">{k}</span> {val[k]}</p>
                            )
                        });
                    }
                    else{
                        return (
                            <p className="form-control-static">{val}</p>
                        )
                    }
                })()}
            </div>
        </div>
    )
}
