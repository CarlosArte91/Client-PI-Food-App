
export default function controllerForm(error, setError, theEvent, dietsIds, listSteps, stepsString) {
    switch (theEvent.target.name) {
        case 'name':
            if (!theEvent.target.value) {
                setError({
                    ...error,
                    name: 'Name field must not be empty'
                })
            }
            else if (theEvent.target.value.length <= 4) {
                setError({
                    ...error,
                    name: 'Name is too short'
                })
            }
            else {
                setError({
                    ...error,
                    name: ''
                })
            }            
            break;
        case 'image':
            if (!theEvent.target.value) {
                setError({
                    ...error,
                    image: 'Image field must not be empty'
                })
            }
            else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(theEvent.target.value)) {
                setError({
                    ...error,
                    image: 'Image must be a url'
                })
            }
            else {
                setError({
                    ...error,
                    image: ''
                })
            }            
            break;
        case 'healthScore':
            if (!theEvent.target.value) {
                setError({
                    ...error,
                    healthScore: 'Health score field must not be empty'
                })
            }
            else if (theEvent.target.value < 0 || theEvent.target.value > 100) {
                setError({
                    ...error,
                    healthScore: 'Health score must be between 0 and 100 points'
                })
            }
            else {
                setError({
                    ...error,
                    healthScore: ''
                })
            }            
            break;
        case 'summary':
            if (!theEvent.target.value) {
                setError({
                    ...error,
                    summary: 'Summary field must not be empty'
                })
            }
            else if (theEvent.target.value.length <= 10) {
                setError({
                    ...error,
                    summary: 'Summary is too short'
                })
            }
            else {
                setError({
                    ...error,
                    summary: ''
                })
            }            
            break;
        case 'diets':            
            if (dietsIds.length === 0) {
                setError({
                    ...error,
                    diets: 'Should check at least one type of diet'
                })
            }
            else {
                setError({
                    ...error,
                    diets: ''
                })
            }            
            break;
        case 'step':
            if (listSteps === '') {
                setError({
                    ...error,
                    step: 'You should add at least one step'
                })
            }
            else if (stepsString !== '') {
                setError({
                    ...error,
                    step: ''
                })
            }            
            break;

    }
};
