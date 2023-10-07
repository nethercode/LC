import "regexp"

func isNumber(s string) bool {
	// Regular expression pattern to match the valid number format
	pattern := `^[\+\-]?(\d+(\.\d*)?|\.\d+)([eE][\+\-]?\d+)?$`
	
	// Use regexp.MatchString to check if the string matches the pattern
	matched, _ := regexp.MatchString(pattern, s)
	
	return matched
}
