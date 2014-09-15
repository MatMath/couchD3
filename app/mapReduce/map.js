function(doc) {
  // Generating the User activity per day = Count of Number item submitted.
  try {
    if (doc.collection !== 'sku_inspections' || !doc.conclusion.inspection_completed_date_machine_readable) {
      return;
    }
    if (doc.status === 'Submitted' || doc.status === 'Archived') {
      // var numberOfRevision = parseFloat(doc._rev);
      var rejected = 0;
      if (doc.conclusion.result == 'Reject') {
        rejected = 1;
      };
      var dateCompleted = Math.floor(doc.conclusion.inspection_completed_date_machine_readable / 360000 / 24 / 7) * 360000 * 24 * 7;
      emit({
        BarName: 'BarNameQuantity',
        LineName: 'Price',
        timestamp: dateCompleted
      }, rejected);
    };
  } catch (e) {
    //error with this inspection. 
  }
}

// Reduce Function:
// The function seems odd since when it calculate the value[0] and value[1] they seems to be overlaping in some way. Even with [1,2] the result will be Bar:3, Line:3 or 3,0 ???
// It is a array of array : [[1, 3] [1, 3] [1, 3]]
function(key, values, rereduce) {
  return {BarValue: values.length, LineValue: sum(values)};
}