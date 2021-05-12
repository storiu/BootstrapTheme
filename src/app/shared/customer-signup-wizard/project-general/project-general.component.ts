import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  DrainageType,
  MachineAccessType,
  ProjectAccessoryType,
  ProjectLocationType,
  ProjectShapeType,
  ProjectTimelineType,
  PropertyGradeType,
  RegisterProject,
  SoilType
} from '../../../core/models/project';
import { enumToOptions } from '../../../core/utils/enum.util';
import { Option } from '../../../core/models/option';
import { accessoryTypes } from '../../../core/data/accessory-types';
import { CustomerSignupWizardService } from '../../../core/services/customer-signup-wizard.service';
import { Location } from '../../../core/models/base';
import { projectGeneralForm } from '../../../core/data/form-labels';

@Component({
  selector: 'archincer-project-general',
  templateUrl: './project-general.component.html',
  styleUrls: ['./project-general.component.scss']
})
export class ProjectGeneralComponent implements OnInit {

  @Input() addressAutoComplete: boolean;

  form: FormGroup = this.fb.group({
    projects: this.fb.array([])
  });
  prefix = projectGeneralForm.prefix;

  get projects(): FormArray {
    return this.form.get('projects') as FormArray;
  }

  expanded = 0; // expanded index

  projectAccessoryTypes: Option<ProjectAccessoryType>[] = enumToOptions<ProjectAccessoryType>(ProjectAccessoryType);
  projectLocationTypes: Option<ProjectLocationType>[] = enumToOptions<ProjectLocationType>(ProjectLocationType);
  projectShapeTypes: Option<ProjectShapeType>[] = enumToOptions<ProjectShapeType>(ProjectShapeType);
  machineAccessTypes: Option<MachineAccessType>[] = enumToOptions<MachineAccessType>(MachineAccessType);
  propertyGradeTypes: Option<PropertyGradeType>[] = enumToOptions<PropertyGradeType>(PropertyGradeType);
  soilTypes: Option<SoilType>[] = enumToOptions<SoilType>(SoilType);
  drainageTypes: Option<DrainageType>[] = enumToOptions<DrainageType>(DrainageType);
  projectTimelineTypes: Option<ProjectTimelineType>[] = enumToOptions<ProjectTimelineType>(ProjectTimelineType);
  accessoryTypes = accessoryTypes;

  constructor(
    private fb: FormBuilder,
    private customerSignupWizardService: CustomerSignupWizardService,
  ) {
  }

  ngOnInit(): void {
    const projects = this.customerSignupWizardService.getFromStorage('projects');
    if (projects) {
      projects.forEach(project => {
        this.addNewProject(project);
      });
    } else {
      this.addNewProject();
    }
    if (this.addressAutoComplete) {
      this.getCurrentLocation();
    }
  }

  addNewProject(project?: RegisterProject): void {
    this.projects.push(this.initGeneralForm(project));
    this.expanded = this.projects.length - 1;
  }

  addressChanged(location: Location, form: any): void {
    form.get('latitude').setValue(location.latitude);
    form.get('longitude').setValue(location.longitude);
  }

  private getCurrentLocation(): void {

  }

  private initGeneralForm(project?: RegisterProject): FormGroup {
    const data: RegisterProject = project || {} as any;
    return this.fb.group({
      name: [data.name || '', [Validators.required, Validators.maxLength(50)]],
      address: [data.address || '', Validators.required],
      latitude: [data.latitude || '', Validators.required],
      longitude: [data.longitude || '', Validators.required],
      projectType: [data.projectType || '', Validators.required],
      locationType: [data.locationType || '', Validators.required],
      projectSize: [data.projectSize || '', Validators.required],
      shapeType: [data.shapeType || '', Validators.required],
      accessories: [data.accessories || []],
      machineAccess: [data.machineAccess || '', Validators.required],
      propertyGrade: [data.propertyGrade || '', Validators.required],
      soilType: [data.soilType || '', Validators.required],
      drainageType: [data.drainageType || '', Validators.required],
      timelineType: [data.timelineType || '', Validators.required],
      budget: data.budget || '',
      attachments: [data.attachments || []],
      comment: data.comment || ''
    });
  }
}
