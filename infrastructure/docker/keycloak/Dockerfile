FROM jboss/keycloak:10.0.2
# 10.0.2 does not work
COPY scripts/ /opt/jboss/startup-scripts/
COPY realm-export.json /tmp/realm-export.json 