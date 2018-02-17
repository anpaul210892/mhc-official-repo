     $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.addButton', function() {
                 var $template = $('#optionTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.removeButton', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.addButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.addButton').removeAttr('disabled');
                     }
                 }
             });
     }); 
	 
	 
	// Monday
     $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.monButton', function() {
                 var $template = $('#monTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.monButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.monButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.monButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 
	 // Tuesday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.tueButton', function() {
                 var $template = $('#tueTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.tueButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.tueButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.tueButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 
	 // Wednesday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.wedButton', function() {
                 var $template = $('#wedTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.wedButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.wedButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.wedButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 
	 
	 	 // Thursday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.thuButton', function() {
                 var $template = $('#thuTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.thuButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.thuButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.thuButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	  // Friday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.friButton', function() {
                 var $template = $('#friTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.friButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.friButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.friButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 // Saturday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.satButton', function() {
                 var $template = $('#satTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.satButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.satButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.satButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 // Sunday
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.sunButton', function() {
                 var $template = $('#sunTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field 
             })
     
             // Remove button click handler
             .on('click', '.sunButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.sunButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.sunButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 
	 
	 
	 
	  // label
	 
	 $(document).ready(function() { 
         var MAX_OPTIONS = 25;
     
         $('#surveyForm')
              
     
             // Add button click handler
             .on('click', '.labButton', function() {
                 var $template = $('#labTemplate'),
                     $clone    = $template
                                     .clone()
                                     .removeClass('hide')
                                     .removeAttr('id')
                                     .insertBefore($template),
                     $option   = $clone.find('[name="option[]"]');
     
                 // Add new field
             })
     
             // Remove button click handler
             .on('click', '.labButtoon', function() {
                 var $row    = $(this).parents('.form-group'),
                     $option = $row.find('[name="option[]"]');
     
                 // Remove element containing the option
                 $row.remove();
     
                 // Remove field 
             })
     
             // Called after adding new field
             .on('added.field.fv', function(e, data) {
                 // data.field   --> The field name
                 // data.element --> The new field element
                 // data.options --> The new field options
     
                 if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length >= MAX_OPTIONS) {
                         $('#surveyForm').find('.labButton').attr('disabled', 'disabled');
                     }
                 }
             })
     
             // Called after removing the field
             .on('removed.field.fv', function(e, data) {
                if (data.field === 'option[]') {
                     if ($('#surveyForm').find(':visible[name="option[]"]').length < MAX_OPTIONS) {
                         $('#surveyForm').find('.labButton').removeAttr('disabled');
                     }
                 }
             }); 
     }); 