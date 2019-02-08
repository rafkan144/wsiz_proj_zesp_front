import { BaseViewService } from './base-view.service';


describe('BaseViewService', () => {
  let service: BaseViewService<any>;
  beforeEach(() => service = new BaseViewService('xxx'));

  it('option.editable should => false when options.visible => false', () => {
    const option = service.getDefaultSettings('fieldName', {
      visible: () => false
    });

    const isEditable = option.editable();

    expect(isEditable).toBeFalsy();
  });

  it ('option.required should => false when options.visible => false', () => {
    const option = service.getDefaultSettings('fieldName', {
      visible: () => false
    });

    const isRequired = option.required();

    expect(isRequired).toBeFalsy();
  });

  it ('option.required should => false when options.editable => false', () => {
    const option = service.getDefaultSettings('fieldName', {
      editable: () => false
    });

    const isRequired = option.required();

    expect(isRequired).toBeFalsy();
  });

  it ('option.disabled should override', () => {
    const option = service.getDefaultSettings('xxx', {
      disabled: () => true
    });

    expect(option.disabled()).toBeTruthy();
  });

  it ('option.required => false when disabled', () => {
    const option = service.getDefaultSettings('xxx', {
      required: () => true,
      disabled: () => true
    });

    expect(option.required()).toBeFalsy();
  });

});
