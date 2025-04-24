export class CustomAdaptor extends ej.data.ODataV4Adaptor {
    processQuery(dm, query) {
        dm.dataSource.url = 'https://localhost:7295/odata/orders'; //Change the url.
        query.addParams('Syncfusion Grid', 'true'); // Add the additional parameter.
        return super.processQuery.apply(this, arguments);
    }

    beforeSend(dm, request, settings) {
        request.headers.set('Authorization', `true`);
        super.beforeSend(dm, request, settings);
    }

    processResponse() {
        let i = 0;
        const original = super.processResponse.apply(this, arguments);
        // Adding serial number.
        if (original.result) {
            original.result.forEach((item) => ej.base.setValue('SNo', ++i, item));
        }
        return original;
    }
}