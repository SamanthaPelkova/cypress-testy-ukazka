describe('template spec', () => {
    it('Basic functions', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-10').click()
  
      cy.get('#select-alertVariant-ts-control').click()
      cy.get('#select-alertVariant-opt-1').click()
      cy.get('#alertIcon').click().type('oznámení1')
      cy.get('.cke_button_icon.cke_button__bold_icon').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo,')
      cy.get('#cke_13').click()
      cy.get('#cke_14').click()
      cy.ckeditor('cke_editor1', ' písmo kurzívou,')
      cy.get('.btn.btn-primary.btn-sm').click()
  
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-24').click()
      cy.ckeditor('cke_editor2', 'Normální písmo')
      cy.get('.btn.btn-primary.btn-sm').click()
  
      cy.get('.btn-group-vertical').eq(1).get('button').eq(5).click()
  
      const afterSwitchContent = '{"blocks":[{"type":"richText","value":{"html":"<p>Normální písmo</p>\\n"}},{"type":"alert","value":{"variant":"info","icon":"oznámení1","richText":{"html":"<strong>Tučné písmo,</strong><em> písmo kurzívou,</em>"}}}]}'
  
      cy.get('#original-output-content').contains(afterSwitchContent)
    })
    it('Columns layout with text', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-3').click()
      cy.get('.btn.btn-outline-secondary.btn-sm.mt-siblings-2').contains('Text').click()
      cy.wait(500)
  
      cy.get('#cke_16').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo')
      cy.get('.modal-dialog .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const columnsTextContent =
        '{"blocks":[{"type":"columns","value":{"items":[{"value":{"html":"<p><strong>Tučné písmo</strong></p>\\n"},"type":"richText"},null,null,null,null],"columns_count":5,"name":"Pět sloupců"}}]}'
  
      cy.get('#original-output-content').contains(columnsTextContent)
    })
    it('Columns with accordeon', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-4').click()
  
      cy.get('.btn-outline-secondary').contains('Harmonika').click()
      cy.get('#accordeonTitle').click().type('Titulek harmonika')
      cy.get('#cke_16').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo')
      cy.get('#headlessui-dialog-panel-32 .btn.btn-primary').contains('Uložit').click()
      cy.get('.page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const harmonicTextContent =
        '{"blocks":[{"type":"columns","value":{"items":[{"value":{"items":[{"title":"Titulek harmonika","body":"<p><strong>Tučné písmo</strong></p>\\n"}]},"type":"accordeon"},null],"columns_count":2,"name":"50:50"}}]}'
  
      cy.get('#original-output-content').contains(harmonicTextContent)
    })
    it('Reference', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-7').click()
  
      cy.get('#referenceAuthor').click().type('Autor knihy')
      cy.get('#authorDescription').click().type('Popis autora knihy')
      cy.get('#cke_16').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo')
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-32 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const referenceContent =
        '{"blocks":[{"type":"references","value":{"references":[{"description":"<p><strong>Tučné písmo</strong></p>\\n","author":"Autor knihy","authorDescription":"Popis autora knihy","image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false}}]}}]}'
  
      cy.get('#original-output-content').contains(referenceContent)
    })
    it('Dividing line', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-9').click()
  
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const dividingLineContent = '{"blocks":[{"type":"horizontalLine","value":{}}]}'
  
      cy.get('#original-output-content').contains(dividingLineContent)
    })
    it('Announcement', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-10').click()
  
      cy.get('#select-alertVariant-ts-control').click()
      cy.get('#select-alertVariant-opt-2').click()
      cy.get('#alertIcon').click().type('Oznámení')
  
      cy.get('.cke_button_icon.cke_button__bold_icon').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo,')
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const announcementContent =
        '{"blocks":[{"type":"alert","value":{"variant":"warning","icon":"Oznámení","richText":{"html":"<strong>Tučné písmo,</strong>"}}}]}'
  
      cy.get('#original-output-content').contains(announcementContent)
    })
    it('Locket with contact', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-11').click()
  
      cy.get('#contactMedallionName').click().type('John Doe')
      cy.get('#contactMedallionJobDescription').click().type('Truhlář')
      cy.get('#contactMedallionPhone').click().type('+420 123 456 789')
      cy.get('#contactMedallionEmail').click().type('john.doe@email.cz')
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-32 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const contactContent =
        '{"blocks":[{"type":"contactMedallion","value":{"items":[{"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false},"name":"John Doe","jobDescription":"Truhlář","email":"john.doe@email.cz","phone":"+420 123 456 789"}]}}]}'
  
      cy.get('#original-output-content').contains(contactContent)
    })
    it('Picture', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-12').click()
  
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('#redirect').click()
      cy.get('#buttonLabel').type('tlačítko')
      cy.get('#url').type('url')
      cy.get('#select-target-ts-control').contains('V aktuálnom okne').click()
      cy.get('#select-target-opt-2').click()
      cy.get('#select-alignment-ts-control').click()
      cy.get('#select-alignment-opt-1').click()
      cy.get('.form-check-input.align-self-center').click()
  
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const pictureContent =
        '{"blocks":[{"type":"image","value":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"url":"https://media-library.peckadesign.com/cdn/detect/media-library-widget-thumbnail/content-editor-image-mock","alt":"alt text en","description":"desc en","target":"_blank","alignment":"left","wrap":true,"dimensions":{"height":1282,"width":1920},"buttonRedirectLabel":"tlačítko","redirectUrl":"url","buttonRedirectEnabled":true}}]}'
  
      cy.get('#original-output-content').contains(pictureContent)
  
    })
    it('Timeline of projects', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-13').click()
  
      cy.get('#timelineItemTitle').type('Projekt 1')
      cy.get('#timelineItemLink').type('https://open.spotify.com')
      cy.get('#timelineItemText').type('Doplňkový text')
      cy.get('#timelineItemYearRound').click()
  
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const timelineContent =
        '{"blocks":[{"type":"timeline","value":{"items":[{"title":"Projekt 1","text":"Doplňkový text","url":"https://open.spotify.com","yearRound":true,"dateFrom":null,"dateTo":null}]}}]}'
  
      cy.get('#original-output-content').contains(timelineContent)
    })
    it('Image grid', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-14').click()
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-32 .page-buttons .btn.btn-primary').contains('Uložit').click()
  
      cy.get('#imageGridItemTitle').type('Nadpis')
      cy.get('#imageGridItemDescription').type('Popis')
  
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const imageGrid = '{"blocks":[{"type":"imageGrid","value":{"items":[{"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false},"title":"Nadpis","description":"Popis"}]}}]}'
  
      cy.get('#original-output-content').contains(imageGrid)
    })
    it('Own brand benefits', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-15').click()
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
      cy.get('#mainBenefitsRepeaterTitle_0').type('Benefit produktu')
      cy.get('.btn.btn-primary.mt-2').contains('Přidat položku').click()
      cy.get('#mainBenefitsRepeaterTitle_1').type('Benefit produktu')
  
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const brandBenefitsContent =
        '{"blocks":[{"type":"mainBenefits","value":{"items":[{"value":"Benefit produktu"},{"value":"Benefit produktu"}],"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false}}}]}'
  
      cy.get('#original-output-content').contains(brandBenefitsContent)
    })
    it('Brand informations', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-16').click()
  
      cy.get('#select-brandInfoImagePosition-ts-control').click()
      cy.get('#select-brandInfoImagePosition-ts-dropdown').click()
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
  
      cy.get('.cke_button_icon.cke_button__bold_icon').click()
      cy.ckeditor('cke_editor1', 'Tučné písmo,')
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const brandInformationsContent =
        '{"blocks":[{"type":"brandInfo","value":{"imagePosition":"left","richText":{"html":"<p><strong>Tučné písmo,</strong></p>\\n"},"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false}}}]}'
  
      cy.get('#original-output-content').contains(brandInformationsContent)
    })
    it('Brand introduction', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-17').click()
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
  
      cy.ckeditor('cke_editor1', 'Tučné písmo')
      cy.ckeditor('cke_editor2', 'Tučné písmo')
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const brandIntroductionContent =
        '{"blocks":[{"type":"brandIntroduction","value":{"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false},"content":{"html":"<p>Tučné písmo</p>\\n"},"content2":{"html":"<p>Tučné písmo</p>\\n"}}}]}'
  
      cy.get('#original-output-content').contains(brandIntroductionContent)
    })
    it('Brand informations with background', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-18').click()
  
      cy.get('#imageInput').click()
      cy.get('#content-editor-image-mock-0-0').click()
      cy.get('#headlessui-dialog-panel-26 .page-buttons .btn.btn-primary').contains('Uložit').click()
  
      cy.ckeditor('cke_editor1', 'Tučné písmo')
      cy.get('#brandInfoWithBackgroundCheckbox1').click()
  
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const brandWithBackgroundContent =
        '{"blocks":[{"type":"brandInfoWithBackground","value":{"background":true,"image":{"originalData":{"fileName":"content-editor-image-mock","width":1920,"height":1282},"alt":"content-editor-image-mock-0","description":"","target":"_blank","url":"","alignment":"left","wrap":false,"dimensions":{"width":0,"height":0},"buttonRedirectLabel":"","redirectUrl":"","buttonRedirectEnabled":false},"richText":{"html":"<p>Tučné písmo</p>\\n"}}}]}'
  
      cy.get('#original-output-content').contains(brandWithBackgroundContent)
    })
    it('Own component', () => {
      cy.visit('http://localhost:3000/')
      cy.get('.icon--plus').click()
      cy.get('#headlessui-menu-item-19').click()
  
      cy.get('.vertical-buttons .icon.icon--success.ms-n6px.me-n6px').click()
  
      const ownComponentContent = '{"blocks":[{"type":"customComponent","value":{"attribute":2}}]}'
  
      cy.get('#original-output-content').contains(ownComponentContent)
    })