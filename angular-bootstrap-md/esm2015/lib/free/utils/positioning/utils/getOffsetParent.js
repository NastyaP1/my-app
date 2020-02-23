/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the offset parent of the given element
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    /** @type {?} */
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    let offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    let sibling;
    while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T2Zmc2V0UGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1ib290c3RyYXAtbWQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9nZXRPZmZzZXRQYXJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7O0FBRTlCLE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBWTtJQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osT0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDO0tBQ2pDOztVQUVLLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7OztRQUdsRCxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJOzs7UUFHM0MsT0FBWTtJQUVoQixPQUFPLFlBQVksS0FBSyxjQUFjLElBQUksT0FBTyxDQUFDLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1FBQ25HLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDckMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7S0FDckM7O1VBRUssUUFBUSxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUTtJQUV0RCxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtRQUMzRCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7S0FDbkY7SUFFRCxnRUFBZ0U7SUFDaEUsaURBQWlEO0lBQ2pELElBQ0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELHdCQUF3QixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsS0FBSyxRQUFRLEVBQy9EO1FBQ0EsT0FBTyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEM7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKi9cbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG5cbiAgbGV0IHNpYmxpbmc6IGFueTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZyAmJiBlbGVtZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBzaWJsaW5nID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgb2Zmc2V0UGFyZW50ID0gc2libGluZy5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XG5cbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gc2libGluZyA/IHNpYmxpbmcub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cbiAgaWYgKFxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXG4gICAgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnXG4gICkge1xuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XG59XG4iXX0=