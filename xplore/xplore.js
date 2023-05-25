var gr = new GlideRecord('u_dc_rack_metadata');
gr.addEncodedQuery('u_rack.nameSTARTSWITHp3sj');
gr.query();
var output = {};
while (gr.next()) {
    var rackSysId = gr.getUniqueValue();
    var rackName = gr.u_rack.getDisplayValue();
    var powerDesign = parseint(gr.u_power_design_kw.getValue());
    output[rackSysId] = {
        rackName: rackName,
        powerDesign: powerDesign,
    };
}
gs.print(output);

