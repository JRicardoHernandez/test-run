import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CommonBackendRoutingModule } from './common-backend-routing.module';

import { GoodScheduleApi } from './api/good-scheduler.api';
import { ImageCategoryApi } from'./api/image-category.api';
import { HttpService } from './api/http.service';

import { ImageCategoryService } from './services/image-category.service';
import { CategoryApi } from './api/category.api';
import { CategoryService } from './services/category.service';

import { LegendsService } from './services/legends.service';
import { ParagraphsService } from './services/paragraphs.service';

import { BankService } from './services/bank.service';
import { BatteryService } from './services/battery.service';
import { HolidayService } from './services/holiday.service';
import { DeductiveService } from './services/deductive.service';
import { ZipCodeService } from './services/zip-code.service';

import { DictamenService } from './services/dictamen.service';
import { CatalogApi } from './api/catalog-api';
import { SiniesterService } from './services/type-siniester.service';
import { ClarificationService } from './services/clarification.service';
import { NonDeliveryReasonsService } from './services/non-delivery-reasons.service';
import { NormService } from './services/norm.service';
import { GenericService } from './services/generic.service';
import { StatusProcessService } from './services/status-process.service';
import { MunicipalityService } from './services/municipality.service';
import { LocalityService } from './services/locality.service';
import { StationService } from './services/station.service';
import { StateOfRepublicService } from './services/state-of-republic.service';
import { LawyerService } from './services/lawyer.service';
import { SettlementService } from './services/settlement.service';
import { SiabClasificationService } from './services/siab-clasification.service';
import { FractionsService } from './services/fractions.service';
import { TypeWarehouseService } from './services/type-warehouses.service';
import { DeductiveVerificationService } from './services/deductive-verification.service';
import { DelegationStateService } from './services/delegation-state.service';
import { RegionalDelegationService } from './services/regional-delegation.service';
import { GeneralStatusService } from './services/general-status.service';
import { WarehouseService } from './services/warehouse.service';
import { TypeSettelementService } from './services/type-settelement.service';
import { TypeGoodstService } from './services/type-goods.service';
import { TypeDoctoService } from './services/type-docto.service';
import { StatusTransferService } from './services/status-trasnsfer.service';
import { MailboxService } from './services/mailbox.service';
import { TypeServicesService } from './services/type-services.service';
import { TypeRelevantService } from './services/typerelevant.service';
import { TransferentesService } from './services/transferentes.service';
import { TypeOrderServiceService } from './services/type-order-services.service';
import { OfficesService } from './services/offices.service';
import { GranteesService } from './services/grantees.service';
import { EdosxcoorService } from './services/edos-x-coor.service';
import { CityService } from './services/city.service';
import { ClaimConclusionService } from './services/claim-conclusion.service';
import { CourtService } from './services/court.service';
import { DelegationService } from './services/delegation.service';
import { DetailDelegationService } from './services/detail-delegation.service';
import { HalfImageService } from './services/half-image.service';
import { LockerService } from './services/locker.service';
import { MediumPhotographyService } from './services/medium-photography.service';
import { NotaryService } from './services/notary.service';
import { PaymentsConceptService } from './services/payments-concept.service';
import { ProficientService } from './services/proficient.service';
import { SubdelegationService } from './services/subdelegation.service';
import { DepartamentService } from './services/departament.service';
import { GoodTypeService } from './services/good-type.service';
import { GoodSubtypeService } from './services/good-subtype.service';
import { GoodSsubtypeService } from './services/good-ssubtype.service';
import { GoodSssubtypeService } from './services/good-sssubtype.service';
import { GoodSituationService } from './services/good-situation.service';
import { InstitutionClassificationService } from './services/institution-classification.service';
import { IssuingInstitutionService } from './services/issuing-institution.service';
import { MinpubService } from './services/minpub.service';
import { PersonService } from './services/person.service';
import { RevisionReasonService } from './services/revision-reason.service';
import { SatSaeClassificationService } from './services/satsae-classification.service';
import { StorehouseService } from './services/storehouse.service';
import { SafeService } from './services/safe.service';
import { QuestionService } from './services/question.service';
import { OriginService } from './services/origin.service';
import { RegulatoryService } from './services/regulatory.service';
import { BatchService } from './services/batch.service';
import { StatusCodeService } from './services/status-code.service';
import { SaveValuesService } from './services/save-values.service';
import { IdentifierService } from './services/identifier.service';
import { IndiciadosService } from './services/indiciados.service';
import { OpinionService } from './services/opinion.service';
import { PenaltyService } from './services/penalty.service';
import { GoodsSubtypeService } from './services/goods-subtype.service';
import { LegalSupportService } from './services/legal-support.service';
import { SatSubclasificationService } from './services/sat-subclasification.service';
import { SatClassificationService } from './services/sat-classification.service';
import { OriginCisiService } from './services/origin-cisi.service';
import { ScoreService } from './services/score.service';
import { ZoneGeographicService } from './services/zone-geographic.service';
import { IndicatorReportService } from './services/Indicator-report.service';
import { DoccompensationService } from './services/doccompensation.service';
import { DoccompensationsatService } from './services/doccompesationsat.service';
import { DoccompensationsatxmlService } from './services/doccompensationsatxml.service';
import { ThirdPartyCompanyService } from './services/third-party-company.service';
import { EntfedService } from './services/entfed.service';
import { EstRpuveService } from './services/est-repuve.service';
import { ManagementService } from './services/management.service';
import { LabelOkeyService } from './services/label-okey.service';
import { StageService } from './services/stage.service';
import { SiseProcessService } from './services/sise-process.service';
import { IfaiSerieService } from './services/ifai-serie.service';
import { ServiceCatService } from './services/service-cat.service';
import { ResponseService } from './services/response.service';
import { AAccumulatedAssetsService } from './services/a-accumulated-assets.service'; 
import { QAccumulatedGoodsService } from './services/q-accumulated-goods.service';

import { ResponseRepuveService } from './services/reponse-repuve..service';
import { RackService } from './services/rack.service';
import { ServicesModule } from '../../../pages/admin/services/services.module';
import { IfaiSerieModule } from '../../../pages/admin/ifai-serie/ifai-serie.module';
import { ClaimsStatusModule } from '../../../pages/admin/claims-status/claims-status.module';
import { ClaimsStatusService } from './services/claims-status.service';
import { DrawerService } from './services/drawer.service';
import { ShelvesService } from './services/shelves.service';



const API = [
  CategoryApi,
  ImageCategoryApi,
  GoodScheduleApi,
  HttpService,
  CatalogApi
];

const SERVICES = [
  CategoryService,
  ImageCategoryService,
  LegendsService,
  ParagraphsService,
  BankService,
  NonDeliveryReasonsService,
  NormService,
  GenericService,
  StatusProcessService,
  MunicipalityService,
  LocalityService,
  DeductiveService,
  DictamenService,
  SiniesterService,
  ClarificationService,
  BatteryService,
  HolidayService,
  ZipCodeService,
  StationService,
  StateOfRepublicService,
  LawyerService,
  SettlementService,
  SiabClasificationService,
  FractionsService,
  TypeWarehouseService,
  DeductiveVerificationService,
  DelegationStateService,
  RegionalDelegationService,
  GeneralStatusService,
  WarehouseService,
  TypeSettelementService,
  TypeGoodstService,
  TypeDoctoService,
  StatusTransferService,
  MailboxService,
  TypeServicesService,
  TypeRelevantService,
  TransferentesService,
  TypeOrderServiceService,
  OfficesService,
  GranteesService,
  EdosxcoorService,
  StationService,
  CategoryService,
  ImageCategoryService,
  LegendsService,
  ParagraphsService,
  CityService,
  DelegationService,
  SubdelegationService,
  DetailDelegationService,
  PaymentsConceptService,
  NotaryService,
  LockerService,
  ProficientService,
  ClaimConclusionService,
  CourtService,
  HalfImageService,
  MediumPhotographyService,
  StorehouseService,
  SafeService,
  SafeService,
  QuestionService,
  OriginService,
  DepartamentService,
  GoodTypeService,
  GoodSubtypeService,
  GoodSsubtypeService,
  GoodSssubtypeService,
  GoodSituationService,
  InstitutionClassificationService,
  IssuingInstitutionService,
  MinpubService,
  PersonService,
  RevisionReasonService,
  SatSaeClassificationService,
  StorehouseService,
  RegulatoryService,
  StatusCodeService,
  BatchService,
  SaveValuesService,
  IdentifierService,
  IndiciadosService,
  OpinionService,
  PenaltyService,
  GoodsSubtypeService,
  LegalSupportService,
  SatSubclasificationService,
  SatClassificationService,
  IndicatorReportService,
  OriginCisiService,
  ScoreService,
  ScoreService,
  ZoneGeographicService,
  DoccompensationService,
  DoccompensationsatService,
  DoccompensationsatxmlService,
  ThirdPartyCompanyService,
  EntfedService,
  EstRpuveService,
  ManagementService,
  LabelOkeyService,
  StageService,
  ServiceCatService,
  SiseProcessService,
  TypeServicesService,
  IfaiSerieService,
  ResponseService,
  AAccumulatedAssetsService,
  QAccumulatedGoodsService,
  ResponseRepuveService,
  RackService,
  ServicesModule,
  IfaiSerieModule,
  ClaimsStatusService,
  DrawerService,
  ShelvesService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //CommonBackendRoutingModule
  ],
  providers: [
    ...SERVICES,
  ],
})
export class CommonBackendModule { 
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
