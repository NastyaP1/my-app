/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getOffsetParent } from './getOffsetParent';
/**
 * @param {?} element
 * @return {?}
 */
export function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPZmZzZXRDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3V0aWxzL2lzT2Zmc2V0Q29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxPQUFZO0lBQ3BDLElBQUEsMkJBQVE7SUFDaEIsSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLENBQ0wsUUFBUSxLQUFLLE1BQU0sSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUM5RSxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQ6IGFueSkge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbGVtZW50O1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnRcbiAgKTtcbn1cbiJdfQ==