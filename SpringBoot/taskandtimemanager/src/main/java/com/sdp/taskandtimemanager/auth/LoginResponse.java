package com.sdp.taskandtimemanager.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class LoginResponse {
    @Builder.Default
    private String accessToken = "";
}
