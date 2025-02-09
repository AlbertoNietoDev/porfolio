import { combineReducers } from 'redux';
import { Authentication } from './AuthReducer'; //Importar reducer
import {
  FileInfo,
  SearchByUser,
  InfoBySearch,
  RecordInfo,
  ActorsInfo,
  ActorInfo,
  Folio,
  FileUpdateMetData,
  GenerateFolioHiringData,
  UserCurentData,
  GetFileEditCustomMetData,
  GetEstatusProceso,
} from './FileReducer';
import {
  GetByUsuarioRolDetalleGrupo,
  GetByUsuarioGruposStatus,
  GetByUsuarioRolBusquedaPortalGrupos,
  UploadBatchDocumentProcess,
  GetUsersInformationMetadadaMasive,
  UploadUsersInformationMetadadaMasive,
} from './FileMasiveReducer';
import {
  UploaBatchFile2Data,
  InitializeBatchiFleData,
  GetFileStageData,
  GetAllBulkFileData,
  UploadBulkFileData,
  UploadBatchFileGEIDData,
  GetListGEIDData,
  GetBulkFileDetails,
  GetAllBulkMetadata,
  GetBulkMetadataDetails,
  UploadBulkFileMetadata,
} from './FlujoMasivoReducer';
import {
  BinnacleInfo,
  ContinueWorkFlowData,
  ReturnStageData,
  RegStatusStage,
} from './WorkFlowReducer';
import {} from './FlujoMasivoReducer';
import {
  FileValidation,
  DocumentValidation,
  catpchaValidation,
  PinValidation,
  DocExternalVal,
  RegisGeolocationData,
  CustomValidationFile,
  ProcessValRulesData,
} from './ValidationReducer';

import {
  Document,
  BioDocument,
  DocumentUpdateMetData,
  UploadSections,
  CargaDocWithSecData,
  RegisterMetadaData,
  OcrData,
  GetDocumentsGroupByRol,
  GetDocumentGeneratorSelection,
  RegisterDocumentGeneratorSelection,
  DownloadDocumentGeneratorSelectionContent,
  ProcessDocumentGeneratorSelection,
  DownloadDocument,
  DownloadSectionImage,
  GetVersionedDocument,
  DownloadVersionedDocument,
  DeleteDocument,
  GetStatePendingDocuments,
  UpdateDocumentMetadata,
  GetDocumentQuestions,
  GetDocumentalStructure,
  FacialComparison,
  ValIdentityData,
  GetValIdentityData,
  RegisteredData,
  AutographSign
} from './DocumentReducer';

import { ProductRemote, ProductHiringData } from './ProductReducer';

import {
  ChangePass,
  UsersAll,
  RegisterUser,
  UpdateUser,
  RegisterUserAuthenticatorRoleData,
  GetAllUsersData,
  GetProfileData,
} from './UserReducer';
import { BiometricData } from './BiometricReducer';
import { RoleAll, GetTenantsData } from './RoleReduce';
import { ListBranchOffice } from './ExternalReducer';
import { SearchData, SelectOptionData, CustomCatalogData } from './ExecuteSearchReducer';
import { PresentationVCRemote } from './PresentationVCReducer';
import { GetGenericGraphics, GetGraphCategories } from './GraphReducer';
import { ReportsData, GetReports } from './ReportsReducers';
import { Loading } from './LoadingReducer';
import { SetDefualtLanguage, IndentificationCaptureData, SetAvatar, SetName } from './GenericReducer';
import { NewPin, GetNotificationsUser, ReSendNip, SendNip } from './NotificationReducer';

const rootReducer = combineReducers({
  Authentication,
  PresentationVCRemote,
  FileInfo,
  SearchByUser,
  InfoBySearch,
  RecordInfo,
  ActorsInfo,
  ActorInfo,
  Folio,
  BinnacleInfo,
  FileValidation,
  DocumentValidation,
  catpchaValidation,
  PinValidation,
  DocExternalVal,
  Document,
  BioDocument,
  ProductRemote,
  ChangePass,
  BiometricData,
  NewPin,
  RegisGeolocationData,
  RoleAll,
  ListBranchOffice,
  UsersAll,
  GetProfileData,
  RegisterUser,
  UpdateUser,
  CustomValidationFile,
  FileUpdateMetData,
  ContinueWorkFlowData,
  ReturnStageData,
  RegStatusStage,
  ProcessValRulesData,
  DocumentUpdateMetData,
  ProductHiringData,
  GenerateFolioHiringData,
  CargaDocWithSecData,
  UploadSections,
  RegisterMetadaData,
  OcrData,
  SearchData,
  UserCurentData,
  GetByUsuarioRolBusquedaPortalGrupos,
  GetByUsuarioRolDetalleGrupo,
  GetByUsuarioGruposStatus,
  UploadBatchDocumentProcess,
  GetUsersInformationMetadadaMasive,
  UploadUsersInformationMetadadaMasive,
  GetDocumentsGroupByRol,
  GetNotificationsUser,
  ReSendNip,
  SendNip,
  SelectOptionData,
  CustomCatalogData,
  UploaBatchFile2Data,
  InitializeBatchiFleData,
  GetFileStageData,
  GetAllBulkFileData,
  UploadBulkFileData,
  GetDocumentGeneratorSelection,
  RegisterDocumentGeneratorSelection,
  DownloadDocumentGeneratorSelectionContent,
  ProcessDocumentGeneratorSelection,
  UploadBatchFileGEIDData,
  GetFileEditCustomMetData,
  RegisterUserAuthenticatorRoleData,
  GetAllUsersData,
  GetTenantsData,
  GetListGEIDData,
  GetBulkFileDetails,
  GetAllBulkMetadata,
  GetBulkMetadataDetails,
  UploadBulkFileMetadata,
  GetEstatusProceso,
  GetGenericGraphics,
  GetGraphCategories,
  SetDefualtLanguage,
  SetAvatar,
  SetName,
  IndentificationCaptureData,
  DownloadDocument,
  DownloadSectionImage,
  GetVersionedDocument,
  DownloadVersionedDocument,
  ReportsData,
  GetReports,
  DeleteDocument,
  GetStatePendingDocuments,
  UpdateDocumentMetadata,
  GetDocumentQuestions,
  GetDocumentalStructure,
  FacialComparison,
  ValIdentityData,
  GetValIdentityData,
  RegisteredData,
  AutographSign,
  Loading,
});

export default rootReducer;
